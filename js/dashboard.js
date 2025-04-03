document.addEventListener('DOMContentLoaded', function() {
    // Toggle sidebar
    const sidebarCollapse = document.getElementById('sidebarCollapse');
    const sidebar = document.getElementById('sidebar');
    const wrapper = document.querySelector('.dashboard-wrapper');
    
    sidebarCollapse.addEventListener('click', function() {
        wrapper.classList.toggle('sidebar-collapsed');
        
        // Guardar preferencia en localStorage
        const isCollapsed = wrapper.classList.contains('sidebar-collapsed');
        localStorage.setItem('sidebarCollapsed', isCollapsed);
    });
    
    // Cargar estado del sidebar
    if (localStorage.getItem('sidebarCollapsed') === 'true') {
        wrapper.classList.add('sidebar-collapsed');
    }
    
    // Responsive sidebar para móviles
    function handleResponsiveSidebar() {
        if (window.innerWidth < 992) {
            wrapper.classList.remove('sidebar-collapsed');
            wrapper.classList.add('sidebar-mobile');
        } else {
            wrapper.classList.remove('sidebar-mobile');
        }
    }
    
    // Inicializar y escuchar cambios de tamaño
    handleResponsiveSidebar();
    window.addEventListener('resize', handleResponsiveSidebar);
    
    // Tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
});
