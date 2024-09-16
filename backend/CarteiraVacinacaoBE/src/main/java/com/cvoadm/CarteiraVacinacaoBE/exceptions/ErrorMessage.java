package com.cvoadm.CarteiraVacinacaoBE.exceptions;

import org.springframework.http.HttpStatus;
import java.time.LocalDateTime;
import java.util.Arrays;

public class ErrorMessage {

    private LocalDateTime timestamp;
    private String[] messages;
    private HttpStatus title;
    private int status;

    // Construtor
    public ErrorMessage(LocalDateTime timestamp, String[] messages, HttpStatus title) {
        this.timestamp = timestamp;
        this.messages = messages;
        this.title = title;
        this.status = title != null ? title.value() : HttpStatus.INTERNAL_SERVER_ERROR.value();
    }

    // Getters e Setters
    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }

    public String[] getMessages() {
        return messages;
    }

    public void setMessages(String[] messages) {
        this.messages = messages;
    }

    public HttpStatus getTitle() {
        return title;
    }

    public void setTitle(HttpStatus title) {
        this.title = title;
        this.status = title != null ? title.value() : HttpStatus.INTERNAL_SERVER_ERROR.value(); // Atualiza o status
    }

    public int getStatus() {
        return status;
    }

    // Método toString para facilitar a visualização dos erros
    @Override
    public String toString() {
        return "ErrorMessage{" +
                "timestamp=" + timestamp +
                ", messages=" + Arrays.toString(messages) +
                ", title=" + title +
                ", status=" + status +
                '}';
    }
}
