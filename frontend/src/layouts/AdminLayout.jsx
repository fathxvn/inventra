function AdminLayout({ children }) {
    return (
      <div>
        <header>
          <h2>Inventra Admin</h2>
        </header>
  
        <main>
          {children}
        </main>
      </div>
    );
  }
  
  export default AdminLayout;