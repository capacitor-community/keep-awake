
  Pod::Spec.new do |s|
    s.name = 'BoostenCapacitorKeepAwake'
    s.version = '0.0.1'
    s.summary = 'Prevent your screen from getting some sleep! '
    s.license = 'MIT'
    s.homepage = 'https://github.com/Boosten/capacitor-keep-awake.git'
    s.author = 'Kevin Boosten'
    s.source = { :git => 'https://github.com/Boosten/capacitor-keep-awake.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end