export class CellComponentAdapterComponent implements OnInit {
  @Input() componentClass: Type<GridCellComponent>;
  @Input() row: any;
  @Input() index: number;
  @ViewChild("viewContainerRef", { read: ViewContainerRef, static: true })
  viewContainerRef: ViewContainerRef;
  @Input() initializer: Callback<any> = () => {};

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    if (this.componentClass) {
      const componentInstance = this.componentClass;

      const componentFactory =
        this.componentFactoryResolver.resolveComponentFactory(
          componentInstance
        );

      const componentRef: ComponentRef<any> =
        this.viewContainerRef.createComponent(componentFactory);

      const currentComponent = componentRef.instance;

      currentComponent.rowData = this.row;

      this.initializer.call(null, currentComponent);
    }
  }
}
