export const  verificarCss = (_mensaje) => {

    return ((mensaje) => {
        const hojasDeEstilo = document.styleSheets;

        for (const hoja of hojasDeEstilo) {
            try {
                const reglas = hoja.cssRules || hoja.rules;
                if (reglas) {
                    for (const regla of reglas) {
                        if (regla.selectorText && regla.selectorText.includes(`${mensaje}`)) {
                            return true;
                        }
                    }
                }
            } catch (error) {
                //  console.error('Error al acceder a las reglas de la hoja de estilo:', error);
            }
        }

        //console.log('La regla .errorMessage no se encontró en ninguna hoja de estilo.');
        return false;
    })(_mensaje)


}
