// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { TrackerId, TrackerIdT } from '../../solarxr-protocol/datatypes/tracker-id.js';


/**
 * There is an available HMD tracker and it's not assigned to head
 */
export class StatusUnassignedHMD implements flatbuffers.IUnpackableObject<StatusUnassignedHMDT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):StatusUnassignedHMD {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsStatusUnassignedHMD(bb:flatbuffers.ByteBuffer, obj?:StatusUnassignedHMD):StatusUnassignedHMD {
  return (obj || new StatusUnassignedHMD()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsStatusUnassignedHMD(bb:flatbuffers.ByteBuffer, obj?:StatusUnassignedHMD):StatusUnassignedHMD {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new StatusUnassignedHMD()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

trackerId(obj?:TrackerId):TrackerId|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new TrackerId()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startStatusUnassignedHMD(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addTrackerId(builder:flatbuffers.Builder, trackerIdOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, trackerIdOffset, 0);
}

static endStatusUnassignedHMD(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createStatusUnassignedHMD(builder:flatbuffers.Builder, trackerIdOffset:flatbuffers.Offset):flatbuffers.Offset {
  StatusUnassignedHMD.startStatusUnassignedHMD(builder);
  StatusUnassignedHMD.addTrackerId(builder, trackerIdOffset);
  return StatusUnassignedHMD.endStatusUnassignedHMD(builder);
}

unpack(): StatusUnassignedHMDT {
  return new StatusUnassignedHMDT(
    (this.trackerId() !== null ? this.trackerId()!.unpack() : null)
  );
}


unpackTo(_o: StatusUnassignedHMDT): void {
  _o.trackerId = (this.trackerId() !== null ? this.trackerId()!.unpack() : null);
}
}

export class StatusUnassignedHMDT implements flatbuffers.IGeneratedObject {
constructor(
  public trackerId: TrackerIdT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const trackerId = (this.trackerId !== null ? this.trackerId!.pack(builder) : 0);

  return StatusUnassignedHMD.createStatusUnassignedHMD(builder,
    trackerId
  );
}
}
