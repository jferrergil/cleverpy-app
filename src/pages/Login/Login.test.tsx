import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen   } from '@testing-library/react';

import Login from './Login'

describe('when component is instantiated...',() =>{
    test('render navbar when your logget out', () => {
        render(
         < Router>
          <Login />
        </Router>,
      );
        expect(screen.getByText('Email')).toBeInTheDocument();
        expect(screen.getByText('Password')).toBeInTheDocument();
        
    })
})

