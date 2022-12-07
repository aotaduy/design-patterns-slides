```mermaid
classDiagram
    Context <-- Client
    AbstractStrategy <|-- Strategy
    AbstractStrategy <-- Context
    AbstractStrategy : +execute(context?)    
    Strategy : +execute(context?)
    Context : +setStrategy(aStrategy)
    Context : strategy
