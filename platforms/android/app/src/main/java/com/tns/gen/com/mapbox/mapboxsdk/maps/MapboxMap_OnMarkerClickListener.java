/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.com.mapbox.mapboxsdk.maps;

public class MapboxMap_OnMarkerClickListener extends java.lang.Object
    implements com.tns.NativeScriptHashCodeProvider,
        com.mapbox.mapboxsdk.maps.MapboxMap.OnMarkerClickListener {
  public MapboxMap_OnMarkerClickListener() {
    super();
    com.tns.Runtime.initInstance(this);
  }

  public boolean onMarkerClick(com.mapbox.mapboxsdk.annotations.Marker param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    return (boolean) com.tns.Runtime.callJSMethod(this, "onMarkerClick", boolean.class, args);
  }

  public int hashCode__super() {
    return super.hashCode();
  }

  public boolean equals__super(java.lang.Object other) {
    return super.equals(other);
  }
}
