// Formatear números como moneda
function formatCurrency(amount) {
    return new Intl.NumberFormat('es-ES', { 
        style: 'currency', 
        currency: 'EUR' 
    }).format(amount);
}

// Generar datos aleatorios para demostración
function generateRandomData(count, min, max) {
    return Array.from({ length: count }, () => 
        Math.floor(Math.random() * (max - min + 1)) + min
    );
}

// Obtener el nombre del mes
function getMonthName(monthIndex) {
    const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    return months[monthIndex];
}

// Generar transacciones de ejemplo
function generateSampleTransactions(count) {
    const products = ['Laptop', 'Teléfono', 'Tablet', 'Monitor', 'Teclado', 'Mouse'];
    const statuses = ['Completado', 'Pendiente', 'Cancelado', 'Enviado'];
    const customers = ['Juan Pérez', 'María García', 'Carlos López', 'Ana Martínez', 'Pedro Sánchez'];
    
    return Array.from({ length: count }, (_, i) => ({
        id: `TRX${1000 + i}`,
        customer: customers[Math.floor(Math.random() * customers.length)],
        product: products[Math.floor(Math.random() * products.length)],
        amount: Math.floor(Math.random() * 900) + 100,
        date: new Date(Date.now() - Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000)),
        status: statuses[Math.floor(Math.random() * statuses.length)]
    }));
}