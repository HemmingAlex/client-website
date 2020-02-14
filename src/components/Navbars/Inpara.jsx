var Parent = React.createClass({
    getInitialState: function(){
      return {sidebarOpen: false};
    },
    handleViewSidebar: function(){
      this.setState({sidebarOpen: !this.state.sidebarOpen});
    },
    render: function() {
      return (
        <div>
          <Header onClick={this.handleViewSidebar} />
          <SideBar isOpen={this.state.sidebarOpen} toggleSidebar={this.handleViewSidebar} />
          <Content isOpen={this.state.sidebarOpen} />
        </div>
      );
    }
  });
  