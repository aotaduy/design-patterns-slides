class Customer {
  name
  email
  toString(){
    return 'Nombre: ' + this.name + ' Email:' + this.email
  }
  getData() {
    return fetch('http://example.com/getCustomerData/' + this.email)
  }
}

class NullCustomer {
  toString() {
    return 'No hay cliente seleccionado'
  }
  getData() {
    return Promise.resolve({})
  }
}
