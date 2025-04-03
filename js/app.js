document.addEventListener('DOMContentLoaded', function() {
    // Inicializar gráficos
    const salesChart = initSalesChart();
    const productsChart = initProductsChart();
    
    // Actualizar métricas
    updateMetrics();
    
    // Cargar tabla de transacciones
    loadTransactionsTable();
    
    // Simular actualización de datos cada 5 segundos (para demostración)
    setInterval(updateMetrics, 5000);
});

function updateMetrics() {
    // Actualizar las cards con datos aleatorios (en un caso real, sería una llamada AJAX)
    document.getElementById('total-sales').textContent = 
        formatCurrency(Math.floor(Math.random() * 90000) + 10000);
    
    document.getElementById('active-users').textContent = 
        Math.floor(Math.random() * 900) + 100;
    
    document.getElementById('new-orders').textContent = 
        Math.floor(Math.random() * 50) + 5;
    
    document.getElementById('conversion-rate').textContent = 
        `${(Math.random() * 10 + 5).toFixed(1)}%`;
    
    // Agregar animación
    const cards = document.querySelectorAll('.card.text-white');
    cards.forEach(card => {
        card.style.animation = 'none';
        void card.offsetWidth; // Trigger reflow
        card.style.animation = 'fadeIn 0.5s ease forwards';
    });
}

function loadTransactionsTable() {
    const tableBody = document.querySelector('#transactions-table tbody');
    const transactions = generateSampleTransactions(10);
    
    // Limpiar tabla
    tableBody.innerHTML = '';
    
    // Agregar filas
    transactions.forEach(transaction => {
        const row = document.createElement('tr');
        
        // Estilo según estado
        let statusClass = '';
        switch(transaction.status) {
            case 'Completado': statusClass = 'text-success'; break;
            case 'Pendiente': statusClass = 'text-warning'; break;
            case 'Cancelado': statusClass = 'text-danger'; break;
            case 'Enviado': statusClass = 'text-info'; break;
        }
        
        // Formatear fecha
        const formattedDate = transaction.date.toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
        
        row.innerHTML = `
            <td>${transaction.id}</td>
            <td>${transaction.customer}</td>
            <td>${transaction.product}</td>
            <td>${formatCurrency(transaction.amount)}</td>
            <td>${formattedDate}</td>
            <td class="${statusClass}">${transaction.status}</td>
        `;
        
        tableBody.appendChild(row);
    });
}