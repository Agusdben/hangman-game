import KeyboardKey from './KeyboardKey'

const KeyboardRow = ({ row }) => {
  return (
    <div className='flex gap-1'>
      {row.map(key => (
        <KeyboardKey key={key} keyboardKey={key} />
      ))}
    </div>
  )
}

export default KeyboardRow
