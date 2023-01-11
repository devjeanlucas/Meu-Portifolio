function CriaCalculadora() {
    return {
        display: document.querySelector('.display'),
        
        
        

        inicia() {
            this.clickBotoes();
            this.display.focus();
            this.clickEnter();
        },


        verificarConta (conta){
            
            if (String(conta).includes(`+`)||String(conta).includes(`-`)||String(conta).includes(`/`)||String(conta).includes(`*`)||String(conta).includes(`(`)||String(conta).includes(`)`)||String(conta).includes(`.`)){
                
                var contaCerta = String(conta).replaceAll('+', '').replaceAll('-', '').replaceAll('/', '').replaceAll('(', '').replaceAll(')', '').replaceAll('.', '').replaceAll('*', '');
                
                if (Number(contaCerta)){
                    conta = String(conta)
                    let resultado = eval(conta)
                    return this.display.value = resultado
                } else if  (!Number(contaCerta)){
                    this.display.value = ''
                    this.display.placeholder = 'Conta Inválida';
                    return
                }
            } else if(!Number(contaCerta)){
                this.display.value = ''
                this.display.placeholder = 'Conta Inválida'
                return
            }
        },
        realizaconta (){
            let conta = this.display.value;
            
            try {
                this.verificarConta(conta)
            } catch (e) {
                return
            }
        },
        clickBotoes() {
            document.addEventListener('click', function (e) { 
                const el = e.target;
                if (el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText)
                }
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }
                if (el.classList.contains('btn-del')) {
                    this.delOne()
                }
                if (el.classList.contains('btn-eq') ) {
                    this.realizaconta()
                }
            //Sai do this atual que é document e volta para o this Pai > .bind(this)
            //Se usar Arrow function Não precisa do Bind(this)
            }.bind(this))
        },
        clickEnter () {
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    this.realizaconta();
                }
            })
        },
        delOne(){
            this.display.value = this.display.value.slice(0, -1)
        },
        clearDisplay() {
            this.display.value = ''
            this.display.focus()
        },
        btnParaDisplay(valor){
            this.display.value += valor; 
        },
    }
}

const calculadora = CriaCalculadora()
calculadora.inicia()