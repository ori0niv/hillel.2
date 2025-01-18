import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emojis: [
        { id: 1, emoji: "😊", votes: 0 },
        { id: 2, emoji: "😂", votes: 0 },
        { id: 3, emoji: "😍", votes: 0 },
        { id: 4, emoji: "😎", votes: 0 },
      ],
      winner: null,
    };
  }

  componentDidMount() {
    const savedVotes = localStorage.getItem("emojiVotes");
    if (savedVotes) {
      this.setState({ emojis: JSON.parse(savedVotes) });
    }
  }


  handleVote = (id) => {
    const updatedEmojis = this.state.emojis.map((emoji) =>
        emoji.id === id ? { ...emoji, votes: emoji.votes + 1 } : emoji
    );

    this.setState({ emojis: updatedEmojis }, () => {
      localStorage.setItem("emojiVotes", JSON.stringify(this.state.emojis));
    });
  };

  showResults = () => {
    const winner = this.state.emojis.reduce((max, emoji) =>
        emoji.votes > max.votes ? emoji : max
    );
    this.setState({ winner });
  };

  clearResults = () => {
    localStorage.removeItem("emojiVotes");
    const resetEmojis = this.state.emojis.map((emoji) => ({
      ...emoji,
      votes: 0,
    }));
    this.setState({ emojis: resetEmojis, winner: null });
  };

  render() {
    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h1>Голосування за смайлик</h1>
          <div>
            {this.state.emojis.map((emoji) => (
                <div key={emoji.id} style={{ margin: "10px" }}>
              <span style={{ fontSize: "2rem", marginRight: "10px" }}>
                {emoji.emoji}
              </span>
                  <button onClick={() => this.handleVote(emoji.id)}>
                    Голосувати ({emoji.votes})
                  </button>
                </div>
            ))}
          </div>
          <div style={{ marginTop: "20px" }}>
            <button onClick={this.showResults} style={{ marginRight: "10px" }}>
              Показати результати
            </button>
            <button onClick={this.clearResults}>Очистити результати</button>
          </div>
          {this.state.winner && (
              <div style={{ marginTop: "20px" }}>
                <h2>Переможець:</h2>
                <span style={{ fontSize: "3rem" }}>{this.state.winner.emoji}</span>
                <p>Кількість голосів: {this.state.winner.votes}</p>
              </div>
          )}
        </div>
    );
  }
}

export default App;
