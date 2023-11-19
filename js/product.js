function changeBackgroundColor(selectedModel) {
    var allModels = document.querySelectorAll('.car-model');
    allModels.forEach(function(model) {
        model.classList.remove('chosen-car-model');
    });
    selectedModel.classList.add('chosen-car-model');
}