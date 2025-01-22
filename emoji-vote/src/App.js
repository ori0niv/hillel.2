import React, { useState, useEffect } from 'react';
import './App.css';

function EmojiVotingApp() {
  const [emojis, setEmojis] = useState(() => {
    const savedEmojis = localStorage.getItem('emojis');
    return savedEmojis
        ? JSON.parse(savedEmojis)
        : [
          { id: 1, emoji: '😀', votes: 0 },
          { id: 2, emoji: '😂', votes: 0 },
          { id: 3, emoji: '😍', votes: 0 },
          { id: 4, emoji: '😎', votes: 0 },
        ];
  });

  const [winner, setWinner] = useState(null);

  useEffect(() => {
    localStorage.setItem('emojis', JSON.stringify(emojis));
  }, [emojis]);

  const handleVote = (id) => {
    setEmojis((prevEmojis) =>
        prevEmojis.map((emoji) =>
            emoji.id === id ? { ...emoji, votes: emoji.votes + 1 } : emoji
        )
    );
  };

  const handleShowResults = () => {
    const maxVotes = Math.max(...emojis.map((emoji) => emoji.votes));
    const winnerEmoji = emojis.find((emoji) => emoji.votes === maxVotes);
    setWinner(winnerEmoji || null);
  };

  const handleClearResults = () => {
    const resetEmojis = emojis.map((emoji) => ({ ...emoji, votes: 0 }));
    setEmojis(resetEmojis);
    setWinner(null);
    localStorage.removeItem('emojis');
  };

  return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Голосування за amazing смайлик</h1>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {emojis.map((emoji) => (
              <li key={emoji.id} style={{ marginBottom: '15px', fontSize: '20px' }}>
                {emoji.emoji} — {emoji.votes} голосів
                <button
                    onClick={() => handleVote(emoji.id)}
                    style={{
                      marginLeft: '10px',
                      padding: '5px 10px',
                      fontSize: '16px',
                      cursor: 'pointer',
                    }}
                >
                  Голосувати
                </button>
              </li>
          ))}
        </ul>

        <button
            onClick={handleShowResults}
            style={{
              marginRight: '10px',
              padding: '10px 15px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
        >
          Показати результати
        </button>

        <button
            onClick={handleClearResults}
            style={{
              padding: '10px 15px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
        >
          Очистити результати
        </button>

        {winner && (
            <div style={{ marginTop: '20px', fontSize: '24px' }}>
              <strong>Переможець:</strong> {winner.emoji} з {winner.votes} голосами!
            </div>
        )}
      </div>
  );
}

export default EmojiVotingApp;
