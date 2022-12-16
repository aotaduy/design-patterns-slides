abstract class AbstractMenu {
    label;
    abstract render()
}
class MenuItem extends AbstractMenu {
    href: string;
    render() {
        return '<a href=${action}> ${label}</a>>'
    }
}
class Menu extends AbstractMenu {
    children: Array<AbstractMenu>
    render() {
        const content = this.children.map(each => each.render()).join(' ');
        return ` <div>${this.label}</div>
                 <div>${content}<div>`;
            }
            add(item) {

                this.children.push(item)
            }
            }
