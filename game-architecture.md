```mermaid
graph TB
    %% Core Game Loop and State
    GameLoop[Game Loop]
    GameState[Game State]
    
    %% Rendering Pipeline
    subgraph Rendering["Renderer"]
        Scene[Scene]
        Camera[Camera]
        Lights[Lights]
    end
    
    %% Game Logic
    subgraph Logic["Game Logic"]
        Physics[Physics]
        Collisions[Collisions]
    end
    
    %% Asset Management
    subgraph Assets["Assets"]
        Models[Models]
        Animations[Animations]
    end
    
    %% Input Management
    subgraph Input["Input"]
        Keyboard[Keyboard]
        Mouse[Mouse]
    end
    
    %% Connections
    Input --> GameState
    GameState --> GameLoop
    GameLoop --> Rendering
    GameLoop --> Logic
    
    Assets --> Scene
    Scene --> Camera
    Lights --> Scene
    
    Physics --> GameState
    Collisions --> Physics
    
    %% Styling
    classDef primary fill:#3eaf7c,stroke:#333,stroke-width:2px,color:white;
    classDef secondary fill:#2c3e50,stroke:#333,stroke-width:2px,color:white;
    classDef tertiary fill:#1a237e,stroke:#333,stroke-width:2px,color:white;
    
    class GameLoop,GameState primary;
    class Scene,Camera,Lights secondary;
    class Physics,Collisions tertiary;
```

# Core Game Architecture

## Main Components

### Game Loop & State
- Controls the game's heartbeat
- Manages game state and updates
- Coordinates systems communication

### Renderer
- Scene: 3D world container
- Camera: Player's view
- Lights: World illumination

### Game Logic
- Physics: Movement and forces
- Collisions: Object interactions

### Assets
- Models: 3D objects and characters
- Animations: Movement sequences

### Input
- Keyboard: Movement and actions
- Mouse: Camera control and targeting
