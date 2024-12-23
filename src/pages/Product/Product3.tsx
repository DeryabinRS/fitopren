import { Col, Row } from "antd"

const Product3 = () => {
	return (
		<div>
			<p>Предлагаемый крем изготовлен из подмора пчёл.</p>
			<p>Хитиновый покров содержит ценные химические вещества: гепарин и гепаринойиды, которые подавляют воспалительные процессы.</p>
			<p>Хитозан (пчелозан) - более мощное биологически активное вещество, чем хитозан ракообразных. Уже доказана его положительная роль в регуляции всех видов обмена веществ.</p>
			<p>Низкомолекулярный хитозан-меланиновый комплекс, полученный из пчелиного подмора, обладает выраженным липидным действием.</p>
			<p>Хитозан способен связывать и выводить радионуклиды и соли тяжелых металлов; он активизирует заживление ожогов и раневой поверхности без образования рубцов; при нанесении на рану обладает кровоостанавливающим и обезболивающим эффектом.</p>
			<p>Пример использования крема Akvita.</p>
			<Row style={{ marginTop: 20 }} gutter={[ 8, 8 ]}>
				<Col sm={{ flex: '50%' }} md={{ flex: '25%' }}>
					<img src={'/img/products/product3/akvita_01a.jpg'} alt="crem01" style={{ width: '100%' }}/>
				</Col>
				<Col sm={{ flex: '50%' }} md={{ flex: '25%' }}>
					<img src={'/img/products/product3/akvita_02a.jpg'} alt="crem01" style={{ width: '100%' }}/>
				</Col>
				<Col sm={{ flex: '50%' }} md={{ flex: '25%' }}>
					<img src={'/img/products/product3/akvita_03a.jpg'} alt="crem01" style={{ width: '100%' }}/>
				</Col>
				<Col sm={{ flex: '50%' }} md={{ flex: '25%' }}>
					<img src={'/img/products/product3/akvita_04a.jpg'} alt="crem01" style={{ width: '100%' }}/>
				</Col>
			</Row>
		</div>
	)
}

export default Product3