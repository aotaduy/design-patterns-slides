const DNI_MAXLENGTH = 11;
const CUIT_MAXLENGTH = 14;

this.loadingDocumentNumber = true;
this.service.insuredSubscription = this.strategy
  .getPersons(documentNumber)
  .subscribe({
    next: (response) => this.handleSearchResult(response),

    error: () => this.handleSearchError(),
  });

export abstract class PersonSearchDocumentTypeStrategy {
  searchControl = new FormControl(null, dniValidator.bind(this));
  pipe;
  maxlength = DNI_MAXLENGTH;
  inputMaxlength = DNI_MAXLENGTH;

  constructor(protected service: AdherentsContainerService) {}

  getPersons(documentNumber: string) {
    return this.service.getPersonsByDNI(documentNumber);
  }
}

export class PersonSearchDniStrategy extends PersonSearchDocumentTypeStrategy {
  constructor(protected service: AdherentsContainerService) {
    super(service);
  }
}

export class PersonSearchCuitStrategy extends PersonSearchDocumentTypeStrategy {
  searchControl = new FormControl(null, cuitValidator.bind(this));
  pipe = new ScCuitPipe();
  maxlength = CUIT_MAXLENGTH;
  inputMaxlength = FORMATTED_CUIT_MAXLENGTH;

  constructor(protected service: AdherentsContainerService) {
    super(service);
  }

  getPersons(documentNumber: string) {
    return this.service.getPersonByCUIT(documentNumber);
  }
}

export class PersonSearchCuitCuilStrategy extends PersonSearchCuitStrategy {}

export class PersonSearchDniCuitStrategy extends PersonSearchCuitStrategy {
  searchControl = new FormControl(null, dniCuitValidator.bind(this));
  pipe = null;
  maxlength = CUIT_MAXLENGTH;
  inputMaxlength = CUIT_MAXLENGTH;

  getPersons(documentNumber: string) {
    const number = this.service.cleanDocumentNumber(documentNumber);

    if (number.length <= DNI_MAXLENGTH) {
      return this.service.getPersonsByDNI(number);
    } else {
      return this.service.getPersonByCUIT(number);
    }
  }
}
