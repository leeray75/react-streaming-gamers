const Decorator =
    (Target) => {
        if(typeof Target.prototype.handleInputChange == 'undefined') {
            Target.prototype.handleInputChange = function(e) {
                const { target } = event;
                const value = target.type === 'checkbox' ? target.checked : target.value;
                const name = target.name;

                this.setState({
                    [name]: value
                });
            }
        }
        return Target;
    };

export default Decorator;