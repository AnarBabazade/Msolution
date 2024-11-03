import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Bir hata oluştuğunda state'i güncelle
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Hata kaydı veya hata raporlama servisine gönderme
        console.error("Hata:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Yedek arayüzü göster
            return <h1>Bir hata oluştu.</h1>;
        }

        return this.props.children; 
    }
}

export default ErrorBoundary;
