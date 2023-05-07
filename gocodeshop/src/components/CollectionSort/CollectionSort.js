import './CollectionSort.css'

export const CollectionSort = ({arr,name}) => {
  return(
      <div className="collection-sort">
        <label>{name}</label>
        <select>
          {arr.map((filter) => <option value="/">{filter}</option>)}
        </select>
      </div>
  )
}
