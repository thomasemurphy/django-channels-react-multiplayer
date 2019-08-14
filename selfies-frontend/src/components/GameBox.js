import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Phone } from '../images/iPhone';
import CurrentMoveUpdate from '../hooks/CurrentMove';

function GameBox({
  game, dispatch, time, currentPlayer,
}) {
  const [currentMove, newMove] = CurrentMoveUpdate(dispatch, time);

  return (
    <React.Fragment>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: '5px',
          padding: '2%',
          justifyContent: 'space-Between',
        }}
      >
        {['post_selfie', 'post_group_selfie', 'post_story', 'dont_post', 'go_live'].map(item => (
          <button
            className={currentMove === item ? 'button-color' : null}
            type="button"
            style={{ padding: '10px' }}
            value={item}
            onClick={newMove}
            disabled={
              (item === 'post_story' && currentPlayer && currentPlayer.stories === 0)
              || !game.round_started
            }
          >
            {item.replace(/_/g, ' ')}
          </button>
        ))}
      </div>
      <div
        style={{
          background: '#ff70a6',
          boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.5), inset 0 1px 3px 0 rgba(0, 0, 0, 0.5)',
          borderRadius: '20px',
          flexGrow: '1',
          padding: '1%',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {game.users.map(player => (
            <div style={{ margin: '1%' }} key={player.username}>
              {player.username}
              {!game.round_started && (player.started ? '!' : ' ?')}
              <div>
                {player.followers}
                {' '}
                {player.followers === 1 ? 'follower' : 'followers'}
              </div>
              <div style={{ marginBottom: '3px' }}>
                {player.stories}
                {' '}
                {player.stories === 1 ? 'story' : 'stories'}
              </div>
              <button
                onClick={newMove}
                id={player.id}
                disabled={!game.round_started}
                value={`leave_comment_${player.id}`}
                className={currentMove === `leave_comment_${player.id}` ? 'button-color' : null}
                type="button"
              >
                <Phone />
              </button>
              {' '}
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

GameBox.propTypes = {
  dispatch: PropTypes.func.isRequired,
  game: PropTypes.shape({
    id: PropTypes.number.isRequired,
    game_status: PropTypes.string.isRequired,
    is_joinable: PropTypes.bool.isRequired,
    room_name: PropTypes.string.isRequired,
    round_started: PropTypes.bool.isRequired,
    users: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        followers: PropTypes.number.isRequired,
        stories: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        started: PropTypes.bool.isRequired,
      }),
    ),
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        message_type: PropTypes.string.isRequired,
        created_at: PropTypes.string.isRequired,
      }),
    ),
  }),
};

GameBox.defaultProps = {
  game: PropTypes.null,
};

export default connect()(GameBox);
