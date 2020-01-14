import CustomerForm from '../components/CustomerForm'

class CustomerPage extends React.Component {

    constructor() {
        super()

        this.handleNext = this.handleNext.bind(this)
        this.handlePrev = this.handlePrev.bind(this)
        this.openCustomerMenu = this.openCustomerMenu.bind(this)

        this.state = {
            view: 0,
            showMenuView: false,
            showCustomerForm: false,
        }

        this.max = 35
    }

    handleNext() {
        if (this.state.view == this.max) {
            this.setState({
                view: 0
            })
        } else {
            this.setState({
                view: this.state.view + 1
            })
        }
    }

    handlePrev() {
        if (this.state.view == 0) {
            this.setState({
                view: this.max
            })
        } else {
            this.setState({
                view: this.state.view - 1
            })
        }
    }

    openCustomerMenu() {
        this.setState({
            showMenuView: true,
            showCustomerForm: true
        })
    }

    closeMenuView() {
        this.setState({
            showMenuView: false,
            showCustomerForm: false
        })
    }

    render() {

        return (
            <div className='customerContainer'>
                {this.state == 0 ? <div className={'customerBackground' + this.max} /> : <div className={'customerBackground' + (this.state.view - 1)} />}
                {this.state == this.max ? <div className={'customerBackground' + 0} /> : <div className={'customerBackground' + (this.state.view + 1)} />}
                <div className={'customerBackground' + this.state.view} />
                <div className='customerContent'>
                    <div className='buttonContainer'>
                        <button className="rotateButtonPrev" onClick={this.handlePrev} />
                        <button className="rotateButtonNext" onClick={this.handleNext} />
                    </div>
                    <div className='menuContainer'>
                        <button className='menuButton' />
                        <div className='dropdownContent'>
                            <button className='customerButton' onClick={this.openCustomerMenu} />
                            <button className='serviceButton' onClick={this.openServiceMenu} />
                            <button className='financeButton' onClick={this.openDealerMenu} />
                        </div>
                    </div>
                    {this.state.showMenuView ? <div className='menuViewContainer'>
                        <div className='menuViewOverlay'>
                            <button className='closeMenuButton'/>
                        </div>
                        <button className='closeButton' onClick={this.closeMenuView} />
                        <div className='menuViewContent' >
                            {this.state.showCustomerForm ? <CustomerForm /> : null}
                        </div>
                    </div > : null}
                </div>
            </div>
        );
    }
}

export default CustomerPage;