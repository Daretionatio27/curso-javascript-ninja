 function DOM(selector) {
      this.element = document.querySelectorAll(selector);
    }

    DOM.prototype.on = function on(eventType, callback) {
      this.element.forEach(function(element) {
        element.addEventListener(eventType, callback, false);
      });
    };

    DOM.prototype.off = function off(eventType, callback) {
      this.element.forEach(function(element) {
        element.removeEventListener(eventType, callback, false);
      });
    };

    DOM.prototype.get = function get() {
      return this.element;
    };

    DOM.prototype.forEach = function forEach() {
      Array.prototype.forEach.apply(this.element, arguments);
    };

    DOM.prototype.map = function map() {
      return Array.prototype.map.apply(this.element, arguments);
    };

    DOM.prototype.filter = function filter() {
      return Array.prototype.filter.apply(this.element, arguments);
    };

    DOM.prototype.reduce = function reduce() {
      return Array.prototype.reduce.apply(this.element, arguments);
    };

    DOM.prototype.reduceRight = function reduceRight() {
      return Array.prototype.reduceRight.apply(this.element, arguments);
    };

    DOM.prototype.every = function every() {
      return Array.prototype.every.apply(this.element, arguments);
    };

    DOM.prototype.some = function some() {
      return Array.prototype.some.apply(this.element, arguments);
    };

    DOM.isArray = function isArray(obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    };

    DOM.isObject = function isObject(obj) {
      return Object.prototype.toString.call(obj) === '[object Object]';
    };

    DOM.isFunction = function isFunction(obj) {
      return Object.prototype.toString.call(obj) === '[object Function]';
    };

    DOM.isNumber = function isNumber(obj) {
      return Object.prototype.toString.call(obj) === '[object Number]';
    };

    DOM.isString = function isString(obj) {
      return Object.prototype.toString.call(obj) === '[object String]';
    };

    DOM.isBoolean = function isBoolean(obj) {
      return Object.prototype.toString.call(obj) === '[object Boolean]';
    };

    DOM.isNull = function isNull(obj) {
      return obj === null || obj === undefined;
    };

    (function() {
      const $form = new DOM('#cep-form');
      const $cepInput = new DOM('#cep-input').get()[0];
      const $statusMessage = new DOM('#status-message').get()[0];
      const $logradouro = new DOM('[data-js="logradouro"]').get()[0];
      const $bairro = new DOM('[data-js="bairro"]').get()[0];
      const $uf = new DOM('[data-js="uf"]').get()[0];
      const $localidade = new DOM('[data-js="localidade"]').get()[0];
      const $cepOutput = new DOM('[data-js="cep"]').get()[0];
      const viacepUrl = 'https://viacep.com.br/ws/[CEP]/json/';

      $form.on('submit', handleFormSubmit);

      function handleFormSubmit(event) {
        event.preventDefault();
        const cep = $cepInput.value.replace(/\D/g, ''); // Limpa caracteres não numéricos

        if (cep.length !== 8) {
          $statusMessage.textContent = 'CEP inválido. Digite um CEP com 8 dígitos.';
          clearAddressFields();
          return;
        }

        fetchAddress(cep);
      }

      function fetchAddress(cep) {
        const url = viacepUrl.replace('[CEP]', cep);
        $statusMessage.textContent = `Buscando informações para o CEP ${cep}...`;
        clearAddressFields();

        fetch(url)
          .then(response => {
            if (!response.ok) {
              throw new Error(`Erro na requisição: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            if (data.erro) {
              $statusMessage.textContent = `Não encontramos o endereço para o CEP ${cep}.`;
            } else {
              $statusMessage.textContent = `Endereço referente ao CEP ${cep}:`;
              $logradouro.textContent = data.logradouro;
              $bairro.textContent = data.bairro;
              $uf.textContent = data.uf;
              $localidade.textContent = data.localidade;
              $cepOutput.textContent = data.cep;
            }
          })
          .catch(error => {
            $statusMessage.textContent = `Ocorreu um erro na busca do CEP ${cep}: ${error.message}`;
          });
      }

      function clearAddressFields() {
        $logradouro.textContent = '';
        $bairro.textContent = '';
        $uf.textContent = '';
        $localidade.textContent = '';
        $cepOutput.textContent = '';
      }
    })();
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */
