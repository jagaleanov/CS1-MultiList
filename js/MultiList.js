// JavaScript Document


add(timeIn, raf, priority) {

	var newNode = new Node(timeIn, raf, priority);

	if (this.head !== null) {
		var pivot = this.head;
		if (pivot.priority <= newNode.priority) { //si el primero en la lista es de menor prioridad
			while (pivot.next !== null) {
				if (pivot.next.priority <= newNode.priority) {
					pivot = pivot.next;
				} else {
					break;
				}
			} //el pivote queda en el siguiente al q añadiremos o en el ultmo si todos son menores

			if (pivot.next !== null && pivot.next.priority < newNode.priority) { //si la lista se recorrio y solo recibimos el ultimo
				pivot.next = newNode;
				console.log(pivot);
			} else { //si  recibimos el "anterior"
				newNode.next = pivot.next;
				pivot.next = newNode;

			}

		} else { //si el primero en la lista tiene mayor prioridad
			var tempo = this.head;
			this.head = newNode;
			this.head.next = tempo;
		}

	} else {
		this.head = new Node(timeIn, raf, priority);
	}

	return this.head;
}
