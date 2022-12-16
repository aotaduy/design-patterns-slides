```mermaid
classDiagram
    BaseHandler <|-- ConcreteHandlers
    BaseHandler <-- Client

    BaseHandler: +setNext(BaseHandler handler)
    BaseHandler: BaseHandler next
    BaseHandler: +handle(request)
    ConcreteHandlers: +handle(request)

