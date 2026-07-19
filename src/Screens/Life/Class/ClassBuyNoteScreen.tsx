import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import GStyles, { appSize } from '../../../Components/GStyles.ts';
import { goBack } from '../../../Navigator/NavigationService.tsx';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// https://www.figma.com/design/ru4rfokmYch305j69FZ5D0/OPC%E6%88%90%E9%95%BF%E5%B9%B3%E5%8F%B0?node-id=612-4486&m=dev
export default function ClassBuyNoteScreen() {

  const insets = useSafeAreaInsets();

  const Nav = () => {
    return (
      <View
        style={{
          height: insets.top + appSize(44),
          width: '100%',
          backgroundColor: '#ffffff00',
          position:'absolute',
          zIndex:999
        }}
      >
        <View style={{ height: insets.top }} />
        <View
          style={[
            GStyles.row,
            GStyles.ac,
            GStyles.jcBetween,
            GStyles.ph16,
            { height: appSize(44), width: '100%' },
          ]}
        >
          <TouchableOpacity
            onPress={() => {
              goBack();
            }}
            style={{
              justifyContent: 'center',
              width: appSize(44),
              height: appSize(44),
            }}
          >
            <Image
              source={require('../../../Assets/Common/nav_back.png')}
              style={{ height: appSize(14), width: appSize(14) }}
            />
          </TouchableOpacity>
          <Text style={{ color: '#1A1A1A', fontSize: appSize(17) }}>
            课程购买须知
          </Text>
          <View style={{ width: appSize(44) }} />
        </View>
      </View>
    );
  };


  return (
    <View style={{ flex: 1 }}>
      <Nav />
      <Image
        style={{ width: '100%', height: appSize(320), position: 'absolute' }}
        source={require('../../../Assets/Life/class/buynotebg.png')}
      />
      <ScrollView style={{ marginTop: appSize(44) + insets.top }}>
        <View style={{ paddingHorizontal: appSize(16) }}>
          <Text
            style={{
              fontSize: appSize(24),
              color: '#333',
              fontWeight: '600',
              marginTop: appSize(34),
            }}
          >
            退款小贴士
          </Text>
          <View
            style={{
              marginTop: appSize(18),
              backgroundColor: '#ffffff',
              borderRadius: appSize(16),
              paddingVertical: appSize(12),
              paddingHorizontal: appSize(12),
            }}
          >
            <Text
              style={{
                fontSize: appSize(13),
                color: '#666',
                lineHeight: appSize(20),
              }}
            >
              课程退款的适用规则以购买时页面展示的退款政策为准，请您在购买前仔细阅读。标准退款规则如下：
              {'\n'}1. 未开始学习的课程，可在购买后七日内申请全额退款。
              {'\n'}2.
              已开始学习或购买超过七日的课程，不支持退款，但因本平台原因导致课程无法正常提供的除外。
              {'\n'}3.
              售后申请须通过本平台官方渠道提交，通过其他渠道提出的申请无效。
              {'\n'} 4. 以下情形不予退款： {'\n'}
              <Text style={{ color: '#999' }}>
                ·您已获得课程电子徽章或通过课程考核。
                {'\n'}·您因个人原因（如失去兴趣、时间不足等）要求退款。
                {'\n'}·购买时已明确标注"特惠课程""不支持退款"的课程。
              </Text>
            </Text>
          </View>

          <View
            style={{
              marginTop: appSize(18),
              backgroundColor: '#ffffff',
              borderRadius: appSize(16),
              paddingVertical: appSize(12),
              paddingHorizontal: appSize(12),
            }}
          >
            <Text
              style={{
                fontSize: appSize(16),
                color: '#333',
                lineHeight: appSize(20),
                fontWeight: '500',
              }}
            >
              关于课程内容
            </Text>
            <Text
              style={{
                fontSize: appSize(13),
                color: '#666',
                lineHeight: appSize(20),
              }}
            >
              本平台提供的课程内容（包括但不限于视频、音频、图文资料、课件、案例等）仅作为知识和技能分享用途，不构成任何形式的专业建议或商业决策依据。
              {'\n'}1.
              课程内容仅供参考与学习，不构成对任何具体商业行为的结果保证。{' '}
              {'\n'}2.
              讲师所表达的观点仅代表其个人见解，不代表本平台的立场和观点。{' '}
              {'\n'}3.
              课程中引用的案例和数据仅为教学目的，不保证其在当前市场环境下的适用性和时效性。
              {'\n'}4.
              本平台尽最大努力确保课程内容的准确性和完整性，但不对课程内容无差错、无遗漏作任何明示或暗示的保证。
            </Text>

            <Text
              style={{
                fontSize: appSize(16),
                color: '#333',
                lineHeight: appSize(20),
                fontWeight: '500',
                marginTop: appSize(20),
              }}
            >
              关于学习效果
            </Text>
            <Text
              style={{
                fontSize: appSize(13),
                color: '#666',
                lineHeight: appSize(20),
              }}
            >
              您理解并同意，课程学习效果因人而异，受多种因素影响，包括但不限于：
              {'\n'}1. 您个人的学习基础、理解能力和投入时间。 {'\n'}2.
              您将所学知识应用于实际场景的执行能力。 {'\n'}3.
              外部市场环境、政策变化等不可控因素。
              {'\n'}
              本平台对您完成课程学习后能否达到特定技能水平、能否获得特定工作机会、能否实现特定的商业收益等，不作任何明示或暗示的承诺或保证。
            </Text>

            <Text
              style={{
                fontSize: appSize(16),
                color: '#333',
                lineHeight: appSize(20),
                fontWeight: '500',
                marginTop: appSize(20),
              }}
            >
              关于收益与结果
            </Text>
            <Text
              style={{
                fontSize: appSize(13),
                color: '#666',
                lineHeight: appSize(20),
              }}
            >
              特别提醒：本平台严禁任何形式的"保证收益""包就业""保底收入"等虚假宣传。
              {'\n'}1.
              课程介绍中提到的"高薪""变现""副业收入"等表述，均为课程内容的客观描述，不代表对您个人学习成果或收入的任何保证。
              {'\n'}2.
              学员案例分享中的个人收益数据仅代表该学员的个别情况，不构成普遍性参考，更不构成对您的收益承诺。
              {'\n'}3.
              任何第三方（包括讲师、助教、其他学员）以本平台名义向您作出的收益承诺，均与本平台无关，本平台不承担任何责任。
              {'\n'}
              如遇他人以保证收益、包就业等名义诱导您购买课程或支付额外费用，请立即通过本平台客服渠道举报。
            </Text>

            <Text
              style={{
                fontSize: appSize(16),
                color: '#333',
                lineHeight: appSize(20),
                fontWeight: '500',
                marginTop: appSize(20),
              }}
            >
              关于徽章与资质
            </Text>
            <Text
              style={{
                fontSize: appSize(13),
                color: '#666',
                lineHeight: appSize(20),
              }}
            >
              您理解并同意，本平台颁发的电子徽章和注入的资质标签仅用于:{'\n'}
              1. 证明您已完成特定课程的学习并通过了相应考核。 {'\n'}2.
              在本平台内识别您具备特定项目的准入资格。
              {'\n'}该等徽章和资质标签不代表： {'\n'}1.
              任何政府机关、行业协会或权威机构颁发的职业资格证书或执业许可。
              {'\n'}2. 对您实际工作能力、职业水平的任何非本平台认证或背书。
              {'\n'}3. 您获得非本平台的特定工作、项目或商业机会的保证。
            </Text>

            <Text
              style={{
                fontSize: appSize(16),
                color: '#333',
                lineHeight: appSize(20),
                fontWeight: '500',
                marginTop: appSize(20),
              }}
            >
              关于技术与服务
            </Text>
            <Text
              style={{
                fontSize: appSize(13),
                color: '#666',
                lineHeight: appSize(20),
              }}
            >
              在课程学习过程中，可能因以下原因导致服务异常，本平台不承担因此产生的损失：
              {'\n'}1.
              网络通信线路故障、网络拥堵等不可抗力因素导致的视频卡顿、中断或数据丢失。
              {'\n'}2.
              您使用的终端设备性能不足、系统版本过低或未按推荐配置使用导致的兼容性问题。
              {'\n'}3.
              本平台进行定期系统维护或紧急故障修复期间的服务暂停。对于上述情况，本平台将尽力恢复服务正常，但不承担由此产生的任何直接或间接损失。
            </Text>

            <Text
              style={{
                fontSize: appSize(16),
                color: '#333',
                lineHeight: appSize(20),
                fontWeight: '500',
                marginTop: appSize(20),
              }}
            >
              关于第三方链接与资源
            </Text>
            <Text
              style={{
                fontSize: appSize(13),
                color: '#666',
                lineHeight: appSize(20),
              }}
            >
              课程中可能包含指向第三方网站或资源的链接，该等链接仅为方便您学习而提供。本平台对该等第三方内容的准确性、完整性、合法性、安全性不作任何保证，您应自行判断并承担访问风险。
            </Text>

            <Text
              style={{
                fontSize: appSize(16),
                color: '#333',
                lineHeight: appSize(20),
                fontWeight: '500',
                marginTop: appSize(20),
              }}
            >
              关于知识产权
            </Text>
            <Text
              style={{
                fontSize: appSize(13),
                color: '#666',
                lineHeight: appSize(20),
              }}
            >
              您购买的课程内容（包括但不限于视频、音频、课件、资料等）的知识产权归本平台或授权方所有。您仅获得在课程有效期内个人学习使用的权利，不得对课程内容进行：
              {'\n'}1. 录制、复制、转售或通过任何方式向第三方以盈利目的传播。{' '}
              {'\n'}2.
              在公开场合（包括但不限于社交媒体、视频平台等）以盈利目的公开分享或展示。
              {'\n'}3.
              用于商业目的或任何超出个人学习范围的使用。如违反上述约定，本平台有权立即终止向您提供服务，并追究您的法律责任。
            </Text>

          </View>
        </View>
      </ScrollView>
    </View>
  );
}

