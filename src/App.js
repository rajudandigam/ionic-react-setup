import React, { Component } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
  IonItemSliding,
  IonItemOptions
} from '@ionic/react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6']
    }
    
    this.onSwipe = this.onSwipe.bind(this);
  }

  onSwipe(event) {
    if(event.detail.side === 'start') {
      const name = event.currentTarget.getAttribute('data-key');

      this.setState(state => ({
        list: state.list.filter(item => item !== name)
      }));      
    }
  }

  render() {
    return (
      <IonApp>
        <IonContent>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Ionic React List</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonList>
          {this.state.list.map((name, index) => (
            <IonItemSliding onIonSwipe={this.onSwipe} key={index} data-key={name}>
              <IonItemOptions side="start">
              </IonItemOptions>
              <IonItem>
                <IonLabel>{name}</IonLabel>
              </IonItem>
              <IonItemOptions side="end">
              </IonItemOptions>
            </IonItemSliding>
            ))}
          </IonList>
        </IonContent>
      </IonApp>
    );
  }
}

export default App;
