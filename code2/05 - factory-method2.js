class EmpresaFactory extends Sector {
    getMenu() {

        return new MenuEmpresa(this)
    }
}
class GranEmpresa extends Sector {
    getMenu() {

        return new MenuEmpresa(this)
    }
}
class Individuo extends Sector {
    getMenu() {

        return new MenuIndividuo(this)
    }
}
class Sector {
    openMenu() {

        this.createMenu().open()
    }
}
