package com.khokhriakov.documentfeature.ui;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.Route;
import com.khokhriakov.base.ui.MainLayout;
import com.khokhriakov.documentfeature.Counterparty;
import com.khokhriakov.documentfeature.CounterpartyService;
import org.springframework.beans.factory.annotation.Autowired;

@Route(value = "counterparties", layout = MainLayout.class)
public class CounterpartyListView extends VerticalLayout {
    private final CounterpartyService service;
    private final Grid<Counterparty> grid = new Grid<>(Counterparty.class);
    private final TextField nameField = new TextField("Наименование");
    private final TextField innField = new TextField("ИНН");
    private final TextField addressField = new TextField("Адрес");
    private final Button saveButton = new Button("Сохранить");
    private final Button clearButton = new Button("Очистить");

    public CounterpartyListView(@Autowired CounterpartyService service) {
        this.service = service;

        // Настройка формы
        HorizontalLayout form = new HorizontalLayout(nameField, innField, addressField, saveButton, clearButton);
        form.setAlignItems(Alignment.END);

        // Настройка таблицы
        grid.setColumns("name", "inn", "address");
        grid.setSizeFull();

        add(form, grid);
        updateGrid();

        saveButton.addClickListener(e -> {
            Counterparty c = new Counterparty(nameField.getValue(), innField.getValue(), addressField.getValue());
            service.save(c);
            Notification.show("Контрагент сохранен");
            updateGrid();
            clearForm();
        });

        clearButton.addClickListener(e -> clearForm());
    }

    private void updateGrid() {
        grid.setItems(service.findAll());
    }

    private void clearForm() {
        nameField.clear();
        innField.clear();
        addressField.clear();
    }
}