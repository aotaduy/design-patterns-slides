```mermaid
classDiagram
    Component <|-- Element
    Component <|-- Composite
    Element <-- Composite
    Component: +execute()
    Element: +execute()
    Composite: +children

    Composite: +execute()
    Composite : +add(Component c)

    Composite: +remove(Component c)

    Composite: +getChildren() Component
