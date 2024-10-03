export function ProductRow({product}) {

    const style = product.stocked ? undefined:{Color: 'red'}

    return <tr>
        <td>{product.name}</td>
        <td>{product.price}</td>
    </tr>
}