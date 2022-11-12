const PassengerPlane = require('./planes/PassengerPlane');
const MilitaryPlane = require('./planes/MilitaryPlane');
const ExperimentalPlane = require('./planes/ExperimentalPlane');

const MILITARY_TYPES = require('./models/militaryTypes');

class Airport {
    constructor(planes) {
        this.planes = planes;
    }

    getPlanes() {
        return this.planes;
    }

    getPlaneByInstance(instanceName) {
        return this.planes.filter((plane) => plane instanceof instanceName);
    }

    getPassengersPlanes() {
        return this.getPlaneByInstance(PassengerPlane);
    }

    getMilitaryPlanes() {
        return this.getPlaneByInstance(MilitaryPlane);
    }

    getExperimentalPlane() {
        return this.getPlaneByInstance(ExperimentalPlane);
    }

    getPassengerPlaneWithMaxPassengersCapacity() {
        const passengerPlanes = this.getPassengersPlanes();

        return passengerPlanes.reduce(
            (planeWithMaxCapacity, item) => planeWithMaxCapacity.passengersCapacity < item.passengersCapacity ? item : planeWithMaxCapacity, passengerPlanes[0]
        );
    }

    getMilitaryPlaneByType(type) {
        return this.militaryPlanes.filter(
          (plane) => plane.militaryType === type
        );
    }

    getTransportMilitaryPlanes(){
        return this.getMilitaryPlaneByType(MILITARY_TYPES.TRANSPORT);
    }

    getBomberMilitaryPlanes(){
        return this.getMilitaryPlaneByType(MILITARY_TYPES.BOMBER);
    }

    sortByMaxDistance() {
        this.planes.sort((a, b) => a.maxFlightDistance - b.maxFlightDistance);
        return this;
    }

    sortByMaxSpeed() {
        this.planes.sort((a, b) => a.maxSpeed - b.maxSpeed);
        return this;
    }

    sortByMaxLoadCapacity() {
        this.planes.sort((a, b) => a.maxLoadCapacity - b.maxLoadCapacity);
        return this;
    }

    static print(planes) {
        return JSON.stringify(planes);
    }
}

module.exports = Airport;
