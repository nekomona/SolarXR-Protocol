// automatically generated by the FlatBuffers compiler, do not modify

package solarxr_protocol.rpc;

@SuppressWarnings("unused")
public final class StatusData {
  private StatusData() { }
  public static final byte NONE = 0;
  public static final byte StatusTrackerReset = 1;
  public static final byte StatusTrackerError = 2;
  public static final byte StatusSteamVRDisconnected = 3;
  public static final byte StatusUnassignedHMD = 4;

  public static final String[] names = { "NONE", "StatusTrackerReset", "StatusTrackerError", "StatusSteamVRDisconnected", "StatusUnassignedHMD", };

  public static String name(int e) { return names[e]; }
}

