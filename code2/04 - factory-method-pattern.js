class Empresa extends Sector {
    createMenu() {
        return new MenuEmpresa(this)
    }
}
class GranEmpresa extends Sector {
    createMenu() {
        return new MenuEmpresa(this)
    }
}
class Individuo extends Sector {
    createMenu() {
        return new MenuIndividuo(this)
    }
}
