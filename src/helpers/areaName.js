
export const areaName = (area) => {

    let nameArea = ''
    if (area === 1) {
        nameArea = 'Sistemas'
    } else if (area === 2) {
        nameArea = 'Recursos Humanos'
    } else {
        nameArea = 'Area sin asignar'
    }
    return nameArea;
    
}
