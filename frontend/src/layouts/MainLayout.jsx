function MainLayout({ children }) {
    return (
      <div>
        <header>
          <h2>Inventra</h2>
        </header>
  
        <main>
          {children}
        </main>
      </div>
    );
  }
  
  export default MainLayout;