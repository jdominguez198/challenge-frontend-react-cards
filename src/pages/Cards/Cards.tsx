import { Component } from 'react';
import { connect } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import CardsList from '../../components/ui/CardsList/CardsList';
import Filter from '../../components/ui/Filter/Filter';
// import CardModel from '../../models/CardModel';
import { fetchCards } from '../../store/cards/actions';

import './Cards.scss';

class Cards extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentDidMount() {
    const { fetchCards } = this.props;
    fetchCards();
  }

  shouldComponentRender() {
    const { loading } = this.props;

    return !loading;
  }

  navigateToCard(cardId: string) {
    // const history = useHistory();
    // history.push(`/cards/${cardId}`);
    console.log('NAVIGATE_TO: ', cardId);
  }

  render() {
    const { cards } = this.props;

    if (!this.shouldComponentRender()) {
      return (
        <p>Loading...</p>
      );
    }

    return (
      <div className="page-cards">
        <section className="page-cards-title">
          <h1>Your Cards</h1>
        </section>
        <section className="page-cards-filters">
          <Filter/>
        </section>
        <section className="page-cards-list">
          <CardsList
            cards={cards}
            editCardHandler={(cardId: string) => this.navigateToCard(cardId)}
            deleteCardHandler={(cardId: string) => console.log('DELETE: ', cardId)}
          />
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    cards: state.cardState.items,
    loading: state.cardState.loading,
    error: state.cardState.error
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchCards: () => dispatch(fetchCards())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);
