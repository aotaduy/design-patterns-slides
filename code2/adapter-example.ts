class CustomerListService  {
    getCustomers() {
        return fetch('http://my-api.com/customers')
    }
}
class CustomerListComponent  {
    list = []
    constructor(service: CustomerListServiceAdapter) {}
    ngOnInit() {

        this.service.getCustomers().suscribe(customers => this.list = customers)
    }
}
class CustomerListServiceAdapter {
    service;
    constructor( adaptee: CustomerListService) {

        this.service = adaptee
    }

    getCustomers() {


        return from(this.service.getCustomers().then(response => response.json()))
    }
}
