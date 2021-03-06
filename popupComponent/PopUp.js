const currentDocument = document.currentScript.ownerDocument;

class PopUp extends HTMLElement {
    constructor() {
      super();
      this.openPopUp = this.openPopUp.bind(this);
      this.closePopUp = this.closePopUp.bind(this);
    }
      connectedCallback(){
        const shadowRoot = this.attachShadow({mode:'open'});

        const template = currentDocument.querySelector('#pop-up-template');
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);
        
        const success = this.getAttribute('success');
        this.render(success)
      }

      openPopUp(){
          this.shadowRoot.querySelector('.pop-up').classList.add('visible');
          this.shadowRoot.querySelector('.pop-up').classList.add('grow-fade');
      }

      closePopUp(){
        this.shadowRoot.querySelector('.pop-up').classList.remove('grow-fade');
        console.log("here")
        setTimeout(()=>{
          this.shadowRoot.querySelector('.pop-up').classList.remove('visible');
        }, 2000)
        
      }

      render(success){
        if(success === "true"){
          this.shadowRoot.querySelector('#success-icon').innerHTML = `<img src="/popupComponent/correct.svg" alt="success tick">`;

          this.shadowRoot.querySelector('#success-message').innerHTML = "Congratulations your jet2 holiday booking has been confirmed";
          this.shadowRoot.querySelector('#success-text').innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.`;

          this.shadowRoot.querySelector('#pop-up-button').addEventListener('click', this.openPopUp);
          this.shadowRoot.querySelector('#cancel').addEventListener('click', this.closePopUp);
          this.shadowRoot.querySelector('#continue').addEventListener('click', this.closePopUp);
        }
        else if (success === "false"){
          this.shadowRoot.querySelector('#success-icon').innerHTML = `<img src="/popupComponent/cross.svg" alt="error cross">`;

          this.shadowRoot.querySelector('#success-message').innerHTML = "Sorry, something appears to have gone wrong. Please try again";
          this.shadowRoot.querySelector('#success-text').innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.`;

          this.shadowRoot.querySelector('#pop-up-button').addEventListener('click', this.openPopUp);
          this.shadowRoot.querySelector('#cancel').addEventListener('click', this.closePopUp);
          this.shadowRoot.querySelector('#continue').addEventListener('click', this.closePopUp);
        }
      }
  }
  
  customElements.define('pop-up', PopUp);