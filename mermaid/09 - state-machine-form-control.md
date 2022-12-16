```mermaid
stateDiagram-v2
    [*] --> Pristine
    Pristine --> Touched
    Touched --> Error
    Touched --> Valid
    Valid --> Error
    Error --> Valid
    Valid --> [*]
