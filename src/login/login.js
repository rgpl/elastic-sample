import React from 'react';
import {
    EuiPage,
    EuiPageBody,
    EuiPageContent,
    EuiPageContentBody,
    EuiPageContentHeader,
    EuiPageContentHeaderSection,
    EuiTitle,
    EuiFieldText,
    EuiFieldPassword,
    EuiSpacer,
    EuiPageHeader,
    EuiPageHeaderSection,
    EuiBottomBar,
    EuiFlexGroup,
    EuiFlexItem,
    EuiButton
  } from '@elastic/eui';
import './login.css';
import { Redirect} from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password:'',
            authenticated:false
        };
    }

    onNameChange = e => {
        this.setState({
          userName: e.target.value,
        });
    };

    onPasswordChange = e => {
        this.setState({
            password: e.target.value
        });
    }

    onLoginClick = e => {
        console.log('login-called');
        this.setState({
            authenticated: true
        });
    }

    render() {
        if(this.state.authenticated){
            return <Redirect to='/' />
        }

        return (
            <EuiPage>
                <EuiPageBody>
                    <EuiPageHeader>
                        <EuiPageHeaderSection>
                        <EuiTitle size="l">
                            <h1>Elastic Sample</h1>
                        </EuiTitle>
                        </EuiPageHeaderSection>
                        <EuiPageHeaderSection>elastic sample</EuiPageHeaderSection>
                    </EuiPageHeader>
                    <EuiSpacer size="xxl"></EuiSpacer>
                <EuiPageContent verticalPosition="center" horizontalPosition="center">
                    <EuiPageContentHeader>
                    <EuiPageContentHeaderSection>
                        <EuiTitle>
                        <h2>Sign-In</h2>
                        </EuiTitle>
                    </EuiPageContentHeaderSection>
                    </EuiPageContentHeader>
                    <EuiPageContentBody>
                        <EuiFieldText
                        placeholder="Username"
                        value={this.state.userName}
                        onChange={this.onNameChange}
                        icon="user"
                        aria-label="Use aria labels when no actual label is in use"
                        />
                        <EuiSpacer size="m"></EuiSpacer>
                        <EuiFieldPassword
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onPasswordChange}
                        aria-label="Use aria labels when no actual label is in use"
                        />
                        <EuiSpacer size="m"></EuiSpacer>
                        <EuiFlexItem grow={false}>
                            <EuiButton fill onClick={this.onLoginClick}>
                                GO
                            </EuiButton>
                        </EuiFlexItem>
                    </EuiPageContentBody>
                </EuiPageContent>
                <EuiBottomBar>
                    <EuiFlexGroup justifyContent="spaceBetween">
                        <EuiFlexItem grow={false}>
                        <EuiFlexGroup gutterSize="s">
                            <EuiFlexItem grow={false}>
                            <EuiButton color="ghost" size="s" iconType="help">
                                Help
                            </EuiButton>
                            </EuiFlexItem>
                            <EuiFlexItem grow={false}>
                            <EuiButton color="ghost" size="s" iconType="globe">
                                Sitemap
                            </EuiButton>
                            </EuiFlexItem>
                        </EuiFlexGroup>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                    </EuiBottomBar>
                </EuiPageBody>
            </EuiPage>
        );

    }
}

export default Login;
