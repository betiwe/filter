import '../App.css';

function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <div className='buttons'>
      {filters.map((e) => {
        let nameclass = e === selected ? 'active' : 'noactive';
        // if(e === selected) {
        // 	nameclass = 'active';
        // } else {
        // 	nameclass = 'noactive'
        // }
        return (
          <button
            className={nameclass}
            onClick={() => {
              onSelectFilter(e);
            }}
          >
            {e}
          </button>
        );
      })}
    </div>
  );
}

export default Toolbar;
