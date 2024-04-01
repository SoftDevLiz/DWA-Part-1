```mermaid

stateDiagram-v2
    I : Idle
    A : Adding
    MAX : Max Reached
    S : Subtracting
    MIN : Min Reached

    [*] --> I: Open app in browser
    I --> [*]: Close browser

    I --> S: subtractHandler
    I --> A: addHandler

    A --> MAX: add to 10
    A --> S: subtractHandler
    A --> I: Reset

    S --> MIN: subtract to -10
    S --> A: addHandler
    S --> I: Reset

    MAX --> I: Reset
    MIN --> I: Reset
```