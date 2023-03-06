package com.example.webchat;


import com.example.webchat.handler.ChatWebSocketHandler;
import org.junit.jupiter.api.Test;
import org.springframework.web.socket.WebSocketSession;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.mock;

public class ChatWebSocketTest {

    @Test
    public void test(){
        var handler = new ChatWebSocketHandler();
        handler.afterConnectionEstablished(mock(WebSocketSession.class));
        int a =6;
        assertTrue(true);
    }
}
