package com.khokhriakov;

import com.vaadin.flow.theme.aura.Aura;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.data.elasticsearch.autoconfigure.DataElasticsearchAutoConfiguration;
import org.springframework.boot.elasticsearch.autoconfigure.ElasticsearchClientAutoConfiguration;
import org.springframework.boot.elasticsearch.autoconfigure.ElasticsearchRestClientAutoConfiguration;

import com.vaadin.flow.component.dependency.StyleSheet;
import com.vaadin.flow.component.page.AppShellConfigurator;
import com.vaadin.flow.component.page.Push;

/**
 * Исключаем автоконфигурацию Elasticsearch, чтобы Boot не создавал свой
 * Elasticsearch-клиент и не конфликтовал с клиентом OpenSearch
 * (spring-data-opensearch-starter). Репозитории Spring Data Elasticsearch
 * продолжают работать поверх OpenSearchTemplate.
 */
@SpringBootApplication(exclude = {
        ElasticsearchClientAutoConfiguration.class,
        ElasticsearchRestClientAutoConfiguration.class,
        DataElasticsearchAutoConfiguration.class
})
@StyleSheet(Aura.STYLESHEET)
@StyleSheet("styles.css") // Your custom styles
@Push
public class Application implements AppShellConfigurator {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}
