$(document).ready(function () {
    // Al hacer clic en el botón "Saber más"
    $(".dress-code-btn").click(function () {
        // Mostrar el modal
        $("#dressCodeModal").modal("show");
    });

    // Al hacer clic en el botón de cerrar dentro del modal
    $("#closeModalBtn").click(function () {
        // Cerrar el modal
        $("#dressCodeModal").modal("hide");
    });
});

$(document).ready(function () {
    // Al hacer clic en el botón "Saber más" en la sección de Regalos
    $("#openGiftsModalBtn").click(function () {
        // Mostrar el modal de Regalos
        $("#giftsModal").modal("show");
    });

    // Al hacer clic en el botón de cerrar dentro del modal de Regalos
    $("#closeGiftsModalBtn").click(function () {
        // Cerrar el modal de Regalos
        $("#giftsModal").modal("hide");
    });
}  );