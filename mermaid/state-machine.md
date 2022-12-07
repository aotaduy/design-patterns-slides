```mermaid
stateDiagram-v2
    [*] --> Loading
    Loading --> Loaded
    Loading --> Error
    Error --> [*]
    Error --> Loading : retry
    Loaded --> Empty
    Empty --> [*]
    Loaded --> [*]
